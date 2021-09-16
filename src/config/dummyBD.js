//lo tomé en base a : https://searchspring.zendesk.com/hc/en-us/articles/360025886091-Sample-JSON-Data-Feed

const productListDummy = [{
        id: 7631,
        sku: "HEH-9133",
        name: "On Cloud Nine Pillow",
        url: "https://www.domain.com/product/heh-9133",
        price: 24.99,
        thumbnail: "https://www.domain.com/images/heh-9133_600x600.png",
    },
    {
        id: 7615,
        sku: "HEH-2245",
        name: "Simply Sweet Blouse",
        url: "https://www.domain.com/product/heh-2245",
        price: 42,
        thumbnail: "https://www.domain.com/images/heh-2245_600x600.png",

    },
    {
        id: 8100,
        sku: "WKS-6016",
        name: "Uptown Girl Blouse",
        url: "https://www.domain.com/product/wks-6016",
        price: 58,
        thumbnail: "https://www.domain.com/images/wks-6016_600x600.png",

    },
    {
        id: 6489,
        sku: "DKO-PROF",
        name: "Knock Your Socks Off Lace-Up Heels",
        url: "https://www.domain.com/product/dko-prof",
        price: 38,
        thumbnail: "https://www.domain.com/images/dko-prof_600x600.png",

    },
    {
        id: 7732,
        sku: "HEH-2172",
        name: "My Cup of Tea Sweater",
        url: "https://www.domain.com/product/heh-2172",
        price: 68,
        thumbnail: "https://www.domain.com/images/heh-2172_600x600.png",

    },
    {
        id: 7609,
        sku: "HEH-2211",
        name: "Walk On Out Slip On Sneakers",
        url: "https://www.domain.com/product/heh-2211",
        price: 34.99,
        thumbnail: "https://www.domain.com/images/heh-2211_600x600.png",

    },
    {
        id: 7675,
        sku: "DKO-CAMEL",
        name: "Warm Hearts Sweater",
        url: "https://www.domain.com/product/dko-camel",
        price: 54.49,
        thumbnail: "https://www.domain.com/images/dko-camel_600x600.png",

    },
    {
        id: 7463,
        sku: "WKS-5026",
        name: "Silver Lining Dress",
        url: "https://www.domain.com/product/wks-5026",
        price: 62,
        thumbnail: "https://www.domain.com/images/wks-5026_600x600.png",

    },
    {
        id: 7677,
        sku: "PCH-8738",
        name: "Follow The Beat Sneakers",
        url: "https://www.domain.com/product/pch-8738",
        price: 32,
        thumbnail: "https://www.domain.com/images/pch-8738_600x600.png",

    },
    {
        id: 8099,
        sku: "PCH-8475",
        name: "Cup of Joe Pillow",
        url: "https://www.domain.com/product/pch-8475",
        price: 36,
        thumbnail: "https://www.domain.com/images/pch-8475_600x600.png",

    },
    {
        id: 7425,
        sku: "BCO-SK101",
        name: "Burst Your Bubble Denim Jacket",
        url: "https://www.domain.com/product/bco-sk101",
        price: 84,
        thumbnail: "https://www.domain.com/images/bco-sk101_600x600.png",

    },
    {
        id: 8102,
        sku: "HEH-2254",
        name: "Walk It Out Heels",
        url: "https://www.domain.com/product/heh-2254",
        price: 32,
        thumbnail: "https://www.domain.com/images/heh-2254_600x600.png",

        "Date Created": "2019-01-31 16:48:23",
    },
    {
        id: 9964,
        sku: "BCO-2208",
        name: "Word To The Wise Journal",
        url: "https://www.domain.com/product/bco-2208",
        price: 14.95,
        thumbnail: "https://www.domain.com/images/bco-2208_600x600.png",

    },
    {
        id: 10440,
        sku: "KOI-721",
        name: "Basic Beauty Off-The-Shoulder Dress",
        url: "https://www.domain.com/product/koi-721",
        price: 52,
        thumbnail: "https://www.domain.com/images/koi-721_600x600.png",

    },
    {
        id: 6060,
        sku: "VBH-V5102",
        name: "Sunset Boulevard Pants",
        url: "https://www.domain.com/product/vbh-v5102",
        price: 44,
        thumbnail: "https://www.domain.com/images/vbh-v5102_600x600.png",

    },
    {
        id: 10448,
        sku: "SKE-15460",
        name: "Across The Pond Boots",
        url: "https://www.domain.com/product/ske-15460",
        price: 74.49,
        thumbnail: "https://www.domain.com/images/ske-15460_600x600.png",

    },
    {
        id: 8137,
        sku: "PCH-8705",
        name: "Once Upon A Time Lace Dress",
        url: "https://www.domain.com/product/pch-8705",
        price: 50,
        thumbnail: "https://www.domain.com/images/pch-8705_600x600.png",

    },
    {
        id: 10018,
        sku: "PGF-ESS",
        name: "Lovey Dovey Maxi Dress",
        url: "https://www.domain.com/product/pgf-ess",
        price: 68,
        thumbnail: "https://www.domain.com/images/pgf-ess_600x600.png",

    },
    {
        id: 5670,
        sku: "HEH-2223",
        name: "Shot in the Dark Pillow",
        url: "https://www.domain.com/product/heh-2223",
        price: 40,
        thumbnail: "https://www.domain.com/images/heh-2223_600x600.png",

    },
    {
        id: 9020,
        sku: "PGF-RIK",
        name: "Diamonds Are Forever Pillow",
        url: "https://www.domain.com/product/pgf-rik",
        price: 36,
        thumbnail: "https://www.domain.com/images/pgf-rik_600x600.png",

    },
];

module.exports = productListDummy;