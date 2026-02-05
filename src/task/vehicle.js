const vehicles = {
  brand: {
    brandModel1: "Honda City",
    brandModel2: "TVS Jupiter",
    brandModel3: "BMW X5",
    brandModel4: "Mahindra Thar",
    brandModel6: "Maruti Swift",},
  type: {
    type1: { wheels: "2 Wheeler",
      modelName: "RE-BLT350",
      price: 180000 },
    type2: {
      wheels: "2 Wheeler",
      modelName: "TVS-JUP125",
      price: 95000 },
    type3: {
      wheels: "4 Wheeler",
      modelName: "HON-CITY2024",
      price: 1200000 },
    type4: {
      wheels: "4 Wheeler",
      modelName: "THAR-4X4",
      price: 1600000 } },
  fuelType: {
    fuelType1: "Petrol",
    fuelType2: "Diesel",
    fuelType3: "Electric"},
  colorVariants: {
    color1: "Blue",
    color2: "White",
    color3: "Black",
    color4: "Silver"},
  getVehicleInfo: function () {
    console.log("Vehicle Brands:", this.brand);
    console.log("Vehicle Types:", this.type);
    console.log("Fuel Types:", this.fuelType);
    console.log("Color Variants:", this.colorVariants);} };
vehicles.getVehicleInfo();
