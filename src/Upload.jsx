import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const navigate = useNavigate()

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    
    setIsUploading(true)
    
    // Simulate upload delay
    setTimeout(() => {
      // In a real app, you would upload to a server here
      // For now, we'll just show success and redirect
      alert('Image uploaded successfully!')
      navigate('/')
      setIsUploading(false)
    }, 1500)
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-montserrat text-4xl md:text-6xl font-black text-white tracking-tight">
                UPLOAD <span className="text-orange-500">DESIGN</span>
              </h1>
              <p className="font-montserrat text-gray-400 mt-2">
                Add your creative designs to the portfolio
              </p>
            </div>
            <button
              onClick={handleBack}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Upload Section */}
      <main className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-center space-y-8">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 hover:border-orange-500 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="text-6xl text-gray-400">📁</div>
                  <h3 className="font-montserrat text-2xl font-bold text-white">
                    Choose Your Design
                  </h3>
                  <p className="font-montserrat text-gray-400">
                    Upload images in JPG, PNG, or GIF format
                  </p>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-montserrat font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    Select Image
                  </label>
                </div>
              </div>

              {/* Preview */}
              {preview && (
                <div className="space-y-4">
                  <h4 className="font-montserrat text-xl font-bold text-white">
                    Preview
                  </h4>
                  <div className="max-w-md mx-auto">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-gray-400">
                    {selectedFile?.name} ({(selectedFile?.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                </div>
              )}

              {/* Upload Button */}
              {selectedFile && (
                <button
                  onClick={handleUpload}
                  disabled={isUploading}
                  className={`bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isUploading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isUploading ? 'Uploading...' : 'Upload to Portfolio'}
                </button>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Upload
