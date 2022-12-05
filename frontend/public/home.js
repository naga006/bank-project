function Home(){
  return (
    <div className="home">
    <Card
      txtcolor="black"
      header="Bank Of Naga"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="images.jpg" className="img-fluid" alt="Responsive image"/>)}
    />
    </div>
  );  
}
