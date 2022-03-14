// Problem-01 start
function NumberOfProducts(Com,Wat,Coff){

    let Computer = 1000;
    let Watch = 260;
    let Coffee = 50;
    let TotalCost= Computer * Com + Watch * Wat + Coffee * Coff;
    console.log
    if((typeof(Com,Wat,Coff))!== "number"){
        console.log("\nERROR INPUT")
    }
    else{
    console.log("Total Cost of the products is: " + TotalCost + " Tk");
}
}

//input
var TotalProduct = NumberOfProducts(2 ,4 ,6 );

// Problem-01 end






// Problem-02 start
var products = [
    {
      id: 1,
      title: "Laptop",
      price: 567,
      description:
        "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 2,
      title: "Mobile",
      price: 367,
      description:
        "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 3,
      title: "Watch",
      price: 180,
      description:
        "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 4,
      title: "Coffee",
      price: 40,
      description:
        "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
  ];

  // Search Product


  if (title.toLowerCase() == "laptop") {
    console.log(products[0]);
} else if (title.toLowerCase() == "mobile") {
    console.log(products[1]);
} else if (title.toLowerCase() == "watch") {
    console.log(products[2]);
} else if (title.toLowerCase() == "coffee") {
    console.log(products[3]);
} else {
    alert('Product Not Found.')
}

// SearchProduct('Coffee');

// Problem-02 End




// Problem-03 start
function SavingYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        let TotalSaving = 366 * 10;    
        console.log("You saved " + TotalSaving + "Tk in " + year + ".");        
    } 
    else {
        let TotalSaving = 365 * 10;      
        console.log("You saved " + TotalSaving + "Tk in " + year + ".");
    }

}
//input
//studied in class five
var Year = SavingYear(2008);

// Problem-03 end
  