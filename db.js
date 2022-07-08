const products = [
    {
      id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
      name: "Lawn Mower",
      description: "The best mower in the world",
      quantity: 230,
      price: 42.44,
      image: "img-1",
      onSale: false,
      categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b"
    },
    {
      id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
      name: "Basketball Hoop",
      description: "The best hoop in the world",
      quantity: 33,
      price: 53.5,
      image: "img-2",
      onSale: false,
      categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d"
    },
    {
      id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
      name: "Spoon",
      description: "Small and delicate spoon",
      quantity: 4266,
      price: 1.33,
      image: "img-3",
      onSale: true,
      categoryId:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    }
  ];
  
  let categories = [
    {
      id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
      name: "Kitchen",
    },
    {
      id: "34115aac-0ff5-4859-8f43-10e8db23602b",
      name: "Garden",
    },
    {
      id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
      name: "Sports",
    },
  ];
  
  
module.exports = {
    products, categories
}  