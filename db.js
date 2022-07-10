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
  
  const reviews = [
    {
      id: "b22da5d4-6a4b-4db5-8ec3-acc228c36260",
      date: "2021-01-01",
      title: "Heavy duty",
      comment: "I love this product, it works well",
      rating: 1,
      productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    },
    {
      id: "78851fe8-a657-410f-9b0a-2bc952636e16",
      date: "2021-04-23",
      title: "This is good",
      comment: "My backyard is now neat",
      rating: 3,
      productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    },
    {
      id: "463c0f40-86bc-4b8e-be47-e363111991d1",
      date: "2020-04-23",
      title: "is okay",
      comment: "Got a bit of a scratch on the handle",
      rating: 2,
      productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    },
    {
      id: "ebd207cd-f909-4bb1-8416-3e17a161b859",
      date: "2020-07-23",
      title: "terrible",
      comment: "why is it so expensive",
      rating: 1,
      productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    },
    {
      id: "92450802-24ef-4907-9c70-b82697a96882",
      date: "2021-01-01",
      title: "Basketball forever",
      comment: "I love how light and durable this hoop is",
      rating: 5,
      productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    },

    {
      id: "1852460f-b186-4a7a-a024-dccc0f72e052",
      date: "2020-07-23",
      title: "This is coooooool!",
      comment: "I would totally recommend",
      rating: 5,
      productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    },
    {
      id: "d075bdc8-df4b-4389-82ba-cb63726639ec",
      date: "2020-07-23",
      title: "Wow",
      comment: "Silver color is so cool",
      rating: 3,
      productId: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
    },
  ];
  
exports.db = {
    products, categories, reviews
}  