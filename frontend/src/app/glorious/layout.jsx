import Header from "../components/Header"

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </>
  )
}

export default layout