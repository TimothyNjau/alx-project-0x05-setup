

const Home: React.FC = () => {
  const  handleGenerateImage = async () => {
    console.log("Generating Images")
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 text-black">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2">
            Image Generation App
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Generate stunning images based on your prompts!
          </p>
          <div className="w-full max-w-md">
            <input 
              type="text" 
              id="promptInput" 
              placeholder="Enter your prompt here..."
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={handleGenerateImage}
            >
              Generate Image
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home;