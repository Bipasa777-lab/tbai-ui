export default async function TestPage() {
    // Simulate fetch delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-semibold">Profile Page</h1>
        <p>This content is rendered after loading.</p>
      </div>
    )
  }
  