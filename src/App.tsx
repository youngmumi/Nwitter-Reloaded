
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    setTimeout(() => setIsLoading(false), 2000);
  }
  useEffect(() => {
    init()
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App
