function App() {
  const Test = [
    {
      element: "heading",
      content: "This is testing"
    },
    {
      element: "subheading",
      content: "testttttttt"
    },
    {
      element: "heading",
      content: "this is heading 2"
    },
    {
      element: "image",
      content: "asdasdads"
    }
  ]

  return (
    <div>
      {
        Test.map((item,index) => (
          console.log(item)
        ))
      }
    </div>
  );
}

export default App;
