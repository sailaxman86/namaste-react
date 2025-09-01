 import React from "react";
 import ReactDom from "react-dom/client";
 import "./App.css";  
/**
 * Headers
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant List
 *  - Restaurant Card
 *   - Image
 *  - Name
 *  - Cusines
 *  - Rating
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact info
 * 
 */

const restList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "215295",
                    "name": "Sri Matha Chinese Fast Food",
                    "cloudinaryImageId": "qkeump7r72qfstrrpvmy",
                    "locality": "Nizampet & Pragathi Nagar",
                    "areaName": "Whisper Valley",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Chinese"
                    ],
                    "avgRating": 4.2,
                    "parentId": "19514",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "14K+",
                    "promoted": true,
                    "adTrackingId": "cid=165fb00e-5990-4d60-8251-ba69c971b154~p=9~adgrpid=165fb00e-5990-4d60-8251-ba69c971b154#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=215295~plpr=COLLECTION~eid=96513b93-a82e-4b98-86da-b0595c8c2252~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:58:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹799",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "165fb00e-5990-4d60-8251-ba69c971b154"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=215295&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "2934",
                    "name": "Tabla Restaurant",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/27/eb07eaee-3390-43b4-b6a4-acc64ba43e53_ee901392-c4a6-4635-a190-5ed1570eecbd.jpg",
                    "locality": "Kukatpally",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Chinese",
                        "Biryani",
                        "Andhra",
                        "South Indian"
                    ],
                    "avgRating": 4.3,
                    "parentId": "19053",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "59K+",
                    "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "shortDescription": "options available",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": ""
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.8",
                            "ratingCount": "7.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=2934&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "8681",
                    "name": "Santosh Dhaba Exclusive",
                    "cloudinaryImageId": "06a2fb6498faa5ae5f8a1d7761ec9449",
                    "locality": "Kukatpally",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Biryani"
                    ],
                    "avgRating": 4.1,
                    "veg": true,
                    "parentId": "8784",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "86K+",
                    "promoted": true,
                    "adTrackingId": "cid=8a1b85ba-852f-4ae6-8a20-534036099e4c~p=10~adgrpid=8a1b85ba-852f-4ae6-8a20-534036099e4c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=8681~plpr=COLLECTION~eid=c107f4ef-db0e-42ee-86f5-9a9920afaf68~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.7",
                            "ratingCount": "4.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "8a1b85ba-852f-4ae6-8a20-534036099e4c"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=8681&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "1089014",
                    "name": "Ulavacharu",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/29/df8a4057-7bfb-4fb8-a3dc-c3fe4f292735_186e757d-3274-41d7-8fb3-2487ac47fb5e.jpg",
                    "locality": "Nizampet & Pragathi Nagar",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Biryani"
                    ],
                    "avgRating": 4.1,
                    "parentId": "4365",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "405",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=1089014&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "933533",
                    "name": "The Mmt'S Kitchen",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/9/1288094e-b6f6-4592-ac82-634e999132a2_fb38035a-c48f-4256-a2a7-4d605a50b9ac.jpg",
                    "locality": "Shiva Nagar",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Pizzas",
                        "Burgers",
                        "shawarma",
                        "Snacks",
                        "Beverages"
                    ],
                    "avgRating": 4,
                    "parentId": "540976",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "13",
                    "promoted": true,
                    "adTrackingId": "cid=abf10d62-8735-415e-bccc-1e03555b5850~p=11~adgrpid=abf10d62-8735-415e-bccc-1e03555b5850#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=933533~plpr=COLLECTION~eid=a93dc8cc-e101-47f1-8911-e0e142167007~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹150",
                        "discountTag": "SAVE BIG",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "abf10d62-8735-415e-bccc-1e03555b5850"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=933533&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "414441",
                    "name": "Srikanya Comfort",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/13/6add887f-34cb-4909-a6d6-d94a8b699fa9_0e0a7b3a-598c-447a-95af-6cf9b1a3f417.jpg",
                    "locality": "PNR Empire",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Biryani"
                    ],
                    "avgRating": 4.3,
                    "parentId": "19495",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "17K+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "5.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=414441&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "6372",
                    "name": "Raja Rani Ruchulu",
                    "cloudinaryImageId": "ep0ktyjti2bltcujvqis",
                    "locality": "Kukatpally",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Andhra",
                        "Chinese",
                        "North Indian",
                        "South Indian",
                        "Tandoor"
                    ],
                    "avgRating": 4.3,
                    "parentId": "8315",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "217K+",
                    "promoted": true,
                    "adTrackingId": "cid=b0c4c6b6-6f90-4367-a75f-1583eb4c2143~p=12~adgrpid=b0c4c6b6-6f90-4367-a75f-1583eb4c2143#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6372~plpr=COLLECTION~eid=93307ad6-0810-4797-9505-5d32de4b9864~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-02 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "description": "",
                                            "shortDescription": "options available",
                                            "fontColor": "#7E808C"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.0",
                            "ratingCount": "12K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "b0c4c6b6-6f90-4367-a75f-1583eb4c2143"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=6372&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "46881",
                    "name": "Pista House",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/5/d70c94bb-95b0-4a0c-a1bb-02bf7462f666_5b0b520d-0630-4ba6-aa7c-9c6eb3055799.jpg",
                    "locality": "Kukatpally",
                    "areaName": "Kukatpally",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Kebabs",
                        "Mughlai",
                        "Tandoor",
                        "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "1732",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "298K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "45K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=46881&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "81387",
                    "name": "Sri Matha Multicuisine Restaurnat",
                    "cloudinaryImageId": "ttdjtgn63pwy40ftofzt",
                    "locality": "Sri Sai Balaji Towers",
                    "areaName": "Whisper Valley",
                    "costForTwo": "₹450 for two",
                    "cuisines": [
                        "Biryani",
                        "Indian",
                        "Tandoor",
                        "Chinese"
                    ],
                    "avgRating": 4.1,
                    "parentId": "19779",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "8.1K+",
                    "promoted": true,
                    "adTrackingId": "cid=0c402129-b8fd-49c1-986b-32231151dcfe~p=13~adgrpid=0c402129-b8fd-49c1-986b-32231151dcfe#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=81387~plpr=COLLECTION~eid=ad4af459-af67-46c2-9a7f-ca34130fb5fa~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹799",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "0c402129-b8fd-49c1-986b-32231151dcfe"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=81387&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "58799",
                    "name": "Kritunga Jagavi's Restaurant",
                    "cloudinaryImageId": "0843192b36610b9eb35479d29d980c88",
                    "locality": "KPHB Main Road",
                    "areaName": "PNR Empire Raji Reddy Nagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Biryani",
                        "Andhra",
                        "Rayalaseema",
                        "South Indian",
                        "Chinese"
                    ],
                    "avgRating": 4.1,
                    "parentId": "473730",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "35K+",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹145",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=58799&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "7630",
                    "name": "Sri Matha Food Court",
                    "cloudinaryImageId": "dj7r9rlhgzuf8gbvas4w",
                    "locality": "Nizampet",
                    "areaName": "Whisper Valley",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Indian",
                        "Chinese"
                    ],
                    "avgRating": 4.1,
                    "parentId": "19581",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "13K+",
                    "promoted": true,
                    "adTrackingId": "cid=ef9e1a11-1e54-430b-9f58-57e5ef757862~p=14~adgrpid=ef9e1a11-1e54-430b-9f58-57e5ef757862#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7630~plpr=COLLECTION~eid=8054ab3e-dac2-4a4e-aa5f-0f50c8cb5014~srvts=1756743803299~collid=83639",
                    "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:31:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.8",
                            "ratingCount": "1.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "ef9e1a11-1e54-430b-9f58-57e5ef757862"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=7630&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "436862",
                    "name": "Biryani Patnam",
                    "cloudinaryImageId": "oee36g71tj6jdcpndgpe",
                    "locality": "Kukatpally",
                    "areaName": "Nizampet & Pragathi Nagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "South Indian",
                        "Chinese"
                    ],
                    "avgRating": 4,
                    "parentId": "263632",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "4.3K+",
                    "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-09-01 23:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹799",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "2.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=436862&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]


const HeaderComponent = () => {
    return (
        <div className="header">
            <div>
                <img src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg" className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props ; 
    const {id,name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData;
    const uniqueId = resData.id;
    return (
        <div id={uniqueId} className="restaurant-card" style={{backgroundColor: "#ceb2b285"}}>
            <img className="restaurant-logo" alt="restaurant-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )   
}

//using props now
const Body = () => {
    console.log();
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-list">
                {restList.map(restaurant => (
                    <RestaurantCard resData={restaurant?.card.card.info} key={restaurant?.card.card.info.id} />
                ))}
            </div> 
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <HeaderComponent />
        <Body />
    </div>;
}
        
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);