import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Pressable,
  Modal,
} from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors } from '@/constants/theme'
import * as ImagePicker from 'expo-image-picker'
import { useSavedMeals } from '@/utils/mealContext' // adjust path if needed
import { useRouter } from 'expo-router' // remove this if you're not using expo-router
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DIFFICULTIES = ['Easy', 'Medium', 'Hard']
const CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

export default function AddRecipe() {
  const { addMeal } = useSavedMeals()
  const router = useRouter() // remove if not using expo-router

  const [image, setImage] = useState<string | null>(null)
  const [mealName, setMealName] = useState('')
  const [description, setDescription] = useState('')
  const [calories, setCalories] = useState('')
  const [minutes, setMinutes] = useState('')
  const [difficulty, setDifficulty] = useState<string>('Easy')
  const [category, setCategory] = useState<string>('Breakfast')
  const [rating, setRating] = useState(0)
  const [steps, setSteps] = useState<string[]>([''])

  // camera
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const [showCamera, setShowCamera] = useState(false)
  const cameraRef = useRef<CameraView>(null)

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  // Called when the "Take Photo" button is tapped — this is the ONLY
  // place permission gets requested, so the rest of the form is never blocked.
  const openCamera = async () => {
    let currentPermission = permission
    if (!currentPermission || !currentPermission.granted) {
      currentPermission = await requestPermission()
    }

    if (!currentPermission?.granted) {
      Alert.alert(
        'Camera permission needed',
        'Please allow camera access to take a photo, or choose one from your gallery instead.'
      )
      return
    }

    setShowCamera(true)
  }

  const takePicture = async () => {
    if (!cameraRef.current) return
    const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 })
    if (photo?.uri) {
      setImage(photo.uri)
    }
    setShowCamera(false)
  }

  // image picker (gallery)
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.')
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) setImage(result.assets[0].uri)
  }

  const updateStep = (text: string, index: number) => {
    const updated = [...steps]
    updated[index] = text
    setSteps(updated)
  }

  const addStep = () => setSteps([...steps, ''])

  const removeStep = (index: number) => {
    if (steps.length === 1) return
    setSteps(steps.filter((_, i) => i !== index))
  }

  const resetForm = () => {
    setImage(null)
    setMealName('')
    setDescription('')
    setCalories('')
    setMinutes('')
    setDifficulty('Easy')
    setCategory('Breakfast')
    setRating(0)
    setSteps([''])
  }

  const handleSubmit = () => {
    if (!mealName.trim()) {
      Alert.alert('Missing name', 'Please give your recipe a name.')
      return
    }

    addMeal({
      category,
      name: mealName,
      calories: calories ? `${calories} kcal` : '',
      time: minutes ? `${minutes} min` : '',
      difficulty,
      tags: [category],
      description,
      imageUrl: image ?? '',
      recipe: steps.filter((s) => s.trim() !== ''),
    })

    Alert.alert('Saved', 'Your recipe has been added.')
    resetForm()
    router?.back() // remove if not using expo-router
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Add Recipe</Text>

      {/* Photo source buttons: Camera above Gallery */}
      <View style={styles.photoButtonsRow}>
        <Pressable style={styles.photoOptionBtn} onPress={openCamera}>
          {/* <Text style={styles.photoOptionIcon}>📷</Text> */}
          <FontAwesome name="camera-retro" size={15} color="black" />
          <Text style={styles.photoOptionText}>Take Photo</Text>
        </Pressable>
      </View>

      {/* Image preview */}
      <Pressable style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>＋</Text>
            <Text style={styles.imagePlaceholderLabel}>Add photo</Text>
          </View>
        )}
      </Pressable>

      {/* Meal name */}
      <View style={styles.field}>
        <Text style={styles.label}>Meal Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Jollof Rice"
          placeholderTextColor="#A0A0A0"
          value={mealName}
          onChangeText={setMealName}
        />
      </View>

      {/* Description */}
      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Short description of the dish"
          placeholderTextColor="#A0A0A0"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Category */}
      <View style={styles.field}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.difficultyRow}>
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat}
              style={[
                styles.difficultyChip,
                category === cat && styles.difficultyChipActive,
              ]}
              onPress={() => setCategory(cat)}
            >
              <Text
                style={[
                  styles.difficultyChipText,
                  category === cat && styles.difficultyChipTextActive,
                ]}
              >
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Calories & Minutes row */}
      <View style={styles.row}>
        <View style={[styles.field, styles.halfField]}>
          <Text style={styles.label}>Calories</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 450"
            placeholderTextColor="#A0A0A0"
            value={calories}
            onChangeText={setCalories}
            keyboardType="numeric"
          />
        </View>
        <View style={[styles.field, styles.halfField]}>
          <Text style={styles.label}>Minutes to Cook</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 30"
            placeholderTextColor="#A0A0A0"
            value={minutes}
            onChangeText={setMinutes}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Difficulty */}
      <View style={styles.field}>
        <Text style={styles.label}>Difficulty</Text>
        <View style={styles.difficultyRow}>
          {DIFFICULTIES.map((level) => (
            <Pressable
              key={level}
              style={[
                styles.difficultyChip,
                difficulty === level && styles.difficultyChipActive,
              ]}
              onPress={() => setDifficulty(level)}
            >
              <Text
                style={[
                  styles.difficultyChipText,
                  difficulty === level && styles.difficultyChipTextActive,
                ]}
              >
                {level}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Rating */}
      <View style={styles.field}>
        <Text style={styles.label}>Rating</Text>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Pressable key={star} onPress={() => setRating(star)}>
              <Text style={[styles.star, star <= rating && styles.starFilled]}>★</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Recipe Steps */}
      <View style={styles.field}>
        <Text style={styles.label}>Recipe Steps</Text>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <TextInput
              style={[styles.input, styles.stepInput]}
              placeholder={`Step ${index + 1}`}
              placeholderTextColor="#A0A0A0"
              value={step}
              onChangeText={(text) => updateStep(text, index)}
              multiline
            />
            <Pressable onPress={() => removeStep(index)} style={styles.removeStepBtn}>
              <Text style={styles.removeStepText}>✕</Text>
            </Pressable>
          </View>
        ))}
        <Pressable style={styles.addStepBtn} onPress={addStep}>
          <Text style={styles.addStepText}>+ Add Step</Text>
        </Pressable>
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Save Recipe</Text>
      </TouchableOpacity>

      {/* Full-screen camera modal — only mounted while taking a photo */}
      <Modal visible={showCamera} animationType="slide">
        <View style={styles.cameraContainer}>
          <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
          <View style={styles.cameraTopBar}>
            <Pressable style={styles.cameraTopBtn} onPress={() => setShowCamera(false)}>
              <Text style={styles.cameraTopBtnText}>✕</Text>
            </Pressable>
            <Pressable style={styles.cameraTopBtn} onPress={toggleCameraFacing}>
              <Text style={styles.cameraTopBtnText}>⟲</Text>
            </Pressable>
          </View>
          <View style={styles.cameraBottomBar}>
            <Pressable style={styles.captureBtn} onPress={takePicture}>
              <View style={styles.captureBtnInner} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 20,
  },

  // Camera / gallery choice buttons
  photoButtonsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  photoOptionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingVertical: 12,
  },
  photoOptionIcon: {
    fontSize: 16,
  },
  photoOptionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  imagePicker: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#F0F0F0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#DADADA',
    borderStyle: 'dashed',
    borderRadius: 16,
  },
  imagePlaceholderText: {
    fontSize: 28,
    color: '#B0B0B0',
    marginBottom: 4,
  },
  imagePlaceholderLabel: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1A1A1A',
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfField: {
    width: '48%',
  },
  difficultyRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  difficultyChip: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  difficultyChipActive: {
    backgroundColor: Colors.buttonGreen,
    borderColor: Colors.buttonGreen,
  },
  difficultyChipText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  difficultyChipTextActive: {
    color: '#FFFFFF',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  star: {
    fontSize: 32,
    color: '#E0E0E0',
  },
  starFilled: {
    color: '#FFC53D',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  stepNumber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.buttonGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  stepNumberText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  stepInput: {
    flex: 1,
    minHeight: 50,
    textAlignVertical: 'top',
  },
  removeStepBtn: {
    marginTop: 12,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeStepText: {
    color: '#999',
    fontSize: 13,
  },
  addStepBtn: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  addStepText: {
    color: Colors.buttonGreen,
    fontWeight: '600',
    fontSize: 14,
  },
  submitBtn: {
    backgroundColor: Colors.buttonGreen,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // Full-screen camera modal styles
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  cameraTopBar: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cameraTopBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraTopBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cameraBottomBar: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  captureBtn: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureBtnInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#fff',
  },
})