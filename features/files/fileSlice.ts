import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fileService from "./fileService";
import { Record } from "@/types/records";
const dummyRecords = [
  {
    type: "file",
    id: "f60af51e-a751-4e12-bca4-92da1ef79998",
    name: "Aeroplane.jpg",
    contents: [],
    src: "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg",
    favourite: false,
    created_at: "2023-04-21T04:22:11",
  },
  {
    type: "file",
    id: "1ec78647-2935-499b-b540-6e4c18d23ba3",
    name: "Bus.jpg",
    contents: [],
    src: "https://cdn.pixabay.com/photo/2023/05/25/09/00/bus-8016675_1280.jpg",
    favourite: false,
    created_at: "2023-04-21T02:52:31",
  },
  {
    type: "file",
    id: "b67e57be-48b5-48a9-abc1-2552fb26fba6",
    name: "Bird.jpg",
    contents: [],
    src: "https://cdn.pixabay.com/photo/2023/07/28/18/23/bird-8155768_1280.jpg",
    favourite: false,
    created_at: "2022-10-02T07:53:47",
  },
  {
    type: "file",
    id: "05c622e5-be6d-4c84-8dbd-c297b69d8592",
    name: "Mountain.jpg",
    contents: [],
    src: "https://cdn.pixabay.com/photo/2023/07/10/06/13/mountain-8117525_1280.jpg",
    favourite: false,
    created_at: "2023-03-16T03:05:47",
  },
  {
    type: "file",
    id: "23614963-8ff3-4089-8ee5-fd48da38ae4f",
    name: "FamilyPhoto.jpg",
    contents: [],
    src: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    favourite: false,
    created_at: "2023-03-10T04:55:28",
  },
  {
    type: "file",
    id: "f3a2cea4-b37d-47fc-94db-68caa9fe9317",
    name: "Resume.pdf",
    contents: [],
    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
    favourite: false,
    created_at: "2022-10-20T17:33:42",
  },
  {
    type: "folder",
    id: "0189aebb-4949-4209-82eb-51bd0f24c076",
    name: "Projects",
    contents: [
      {
        type: "file",
        id: "0da76e36-0dcb-490c-912e-a2d72be68903",
        name: "VacationPics.jpg",
        contents: [],
        src: "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        favourite: false,
        created_at: "2023-08-14T13:21:36",
      },
      {
        type: "file",
        id: "5eb281d7-3013-44f3-92fd-170ef6dbcb02",
        name: "Budget.xlsx",
        contents: [],
        src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
        favourite: false,
        created_at: "2023-08-12T18:54:43",
      },
      {
        type: "folder",
        id: "402964c5-4fb5-48e3-8ab7-977a7ca435f2",
        name: "WebsiteDesign",
        contents: [
          {
            type: "file",
            id: "dd8ec80a-787b-4800-a1d4-a76dc88b9790",
            name: "DesignDraft.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-08-13T23:54:13",
          },
          {
            type: "file",
            id: "01f4018b-4f89-46d7-9fd0-251ede166c33",
            name: "UIPrototype.jpg",
            contents: [],
            src: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favourite: false,
            created_at: "2023-08-11T21:13:56",
          },
          {
            type: "folder",
            id: "c0c64f1e-2e51-43d9-916e-cb51f614f118",
            name: "Icons",
            contents: [
              {
                type: "file",
                id: "08b0a1f9-159b-4f49-8cbf-572f0ccdebb9",
                name: "Icon1.png",
                contents: [],
                src: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-11T13:00:40",
              },
              {
                type: "file",
                id: "c11b40d0-9aa6-4d1c-b326-5fd73bd06938",
                name: "Icon2.png",
                contents: [],
                src: "https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: true,
                created_at: "2023-08-13T16:29:24",
              },
              {
                type: "file",
                id: "9036d8f8-b11b-41dd-bdc6-6a210e2b3c25",
                name: "Icon3.png",
                contents: [],
                src: "https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-09T04:09:01",
              },
              {
                type: "folder",
                id: "6af89db9-71a8-47b6-b164-7d8e4a1b55fa",
                name: "VectorIcons",
                contents: [
                  {
                    type: "file",
                    id: "01350400-9691-47f3-a06a-f04f4624a325",
                    name: "VectorIcon1.svg",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: false,
                    created_at: "2023-08-14T01:36:28",
                  },
                  {
                    type: "file",
                    id: "711cfaae-285b-4839-b967-ebf4202a7ba4",
                    name: "VectorIcon2.svg",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: true,
                    created_at: "2023-08-14T09:23:20",
                  },
                  {
                    type: "file",
                    id: "d983fdee-282f-4bb8-b8cc-8ee6914bb55d",
                    name: "VectorIcon3.svg",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: false,
                    created_at: "2023-08-14T11:39:12",
                  },
                  {
                    type: "file",
                    id: "d1414bf0-dd5d-4d37-9d81-a3daf88309bd",
                    name: "VectorIcon4.svg",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: false,
                    created_at: "2023-08-14T03:41:41",
                  },
                ],
                src: "",
                favourite: false,
                created_at: "2023-08-13T23:27:03",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-08-09T02:37:25",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-08-08T11:57:02",
      },
      {
        type: "folder",
        id: "079dc212-9acb-4e6b-8306-53b3e3b333eb",
        name: "Programming",
        contents: [
          {
            type: "file",
            id: "e60ad57f-6ed8-46c7-9f59-86c9f4ef0cd3",
            name: "CodeSamples.zip",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: true,
            created_at: "2023-08-10T15:28:27",
          },
          {
            type: "folder",
            id: "aa873b2d-f084-42cd-b57d-5ea941708de6",
            name: "Screenshots",
            contents: [
              {
                type: "file",
                id: "9d2988d7-d1eb-4afe-a47d-36e28248c68c",
                name: "Screenshot1.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-12T00:48:19",
              },
              {
                type: "file",
                id: "08176566-48fd-458e-8ec7-80a9743cece2",
                name: "Screenshot2.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-11T06:32:54",
              },
              {
                type: "folder",
                id: "9157586d-4886-43d8-b7e1-57a12c80ad61",
                name: "DebugLogs",
                contents: [
                  {
                    type: "file",
                    id: "c05fab3e-b7be-4362-96c6-0b11eaa777c9",
                    name: "Log1.txt",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: false,
                    created_at: "2023-08-11T14:06:26",
                  },
                  {
                    type: "file",
                    id: "fefa6ecb-93bc-4418-8c9a-fb894e670576",
                    name: "Log2.txt",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: false,
                    created_at: "2023-08-11T09:41:16",
                  },
                  {
                    type: "file",
                    id: "f5e6574b-7008-4032-8cea-5394b5effde8",
                    name: "Log3.txt",
                    contents: [],
                    src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                    favourite: true,
                    created_at: "2023-08-12T18:11:46",
                  },
                ],
                src: "",
                favourite: false,
                created_at: "2023-08-11T07:58:55",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-08-11T00:59:40",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-08-08T17:16:12",
      },
    ],
    src: "",
    favourite: false,
    created_at: "2023-08-07T20:10:58",
  },
  {
    type: "folder",
    id: "7957da56-f846-4832-aca4-c0b8e6fac85c",
    name: "Personal",
    contents: [
      {
        type: "folder",
        id: "162c72d3-186c-45fe-aa35-8421c7f1b510",
        name: "Travel",
        contents: [
          {
            type: "file",
            id: "cbbfef3e-0bd4-4d55-a698-c87cdbb2092f",
            name: "TravelPlans.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-07-27T13:42:15",
          },
          {
            type: "file",
            id: "ee3b0a0f-8196-49f5-a2e7-8d2a2d9e1685",
            name: "DestinationPhoto.jpg",
            contents: [],
            src: "https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favourite: false,
            created_at: "2023-07-11T12:11:26",
          },
          {
            type: "folder",
            id: "177278d1-dd05-498c-84e9-167a23b98d40",
            name: "TravelAlbum",
            contents: [
              {
                type: "file",
                id: "68d755a2-b4eb-410f-9eec-a113f3425a00",
                name: "Photo1.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/5641889/pexels-photo-5641889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-05T04:53:51",
              },
              {
                type: "file",
                id: "fbf80153-2de6-475f-ac40-b02209139066",
                name: "Photo2.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-03T12:32:14",
              },
              {
                type: "folder",
                id: "8ebdfa30-a843-46ab-9d64-b2aeb6e7bc27",
                name: "Landscapes",
                contents: [
                  {
                    type: "file",
                    id: "4a8393f7-ad91-4b64-a278-fd7c40b7811f",
                    name: "Landscape1.jpg",
                    contents: [],
                    src: "https://images.pexels.com/photos/7147468/pexels-photo-7147468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    favourite: false,
                    created_at: "2023-08-11T00:52:43",
                  },
                  {
                    type: "file",
                    id: "263b192e-1c4a-43b9-b29a-ed3bfbf3a912",
                    name: "Landscape2.jpg",
                    contents: [],
                    src: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    favourite: false,
                    created_at: "2023-08-07T20:46:26",
                  },
                ],
                src: "",
                favourite: false,
                created_at: "2023-07-27T06:53:08",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-07-15T03:29:41",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-06-25T18:07:59",
      },
      {
        type: "folder",
        id: "e1f4ce08-d1b8-4b72-8530-a48cbbaa03e9",
        name: "Cooking",
        contents: [
          {
            type: "file",
            id: "c4241fcc-db23-4ace-8be5-f20837a8b9ab",
            name: "RecipeBook.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-06-29T15:33:18",
          },
          {
            type: "file",
            id: "8993942b-c3e6-480e-9081-4c73ee21b652",
            name: "Dish1.jpg",
            contents: [],
            src: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favourite: false,
            created_at: "2023-02-15T10:57:12",
          },
          {
            type: "file",
            id: "6c64ccd4-68ef-4fe6-b89e-05247aa45aca",
            name: "Dish2.jpg",
            contents: [],
            src: "https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favourite: true,
            created_at: "2023-02-01T18:18:05",
          },
          {
            type: "folder",
            id: "be4ba623-8f76-4445-8892-fe7f3be72005",
            name: "Ingredients",
            contents: [
              {
                type: "file",
                id: "b0ed9371-8a5b-49d2-b1d5-9d929746df4e",
                name: "Ingredient1.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: true,
                created_at: "2023-07-24T19:40:16",
              },
              {
                type: "file",
                id: "9d39b946-7e3a-4d71-a91c-e77a0203965f",
                name: "Ingredient2.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-06T02:26:01",
              },
              {
                type: "folder",
                id: "657cb21b-4828-4071-92e7-982be5ce6eba",
                name: "ExtraIngredients",
                contents: [
                  {
                    type: "file",
                    id: "22021757-1c95-4057-a3ce-5a7afbc3d30f",
                    name: "Ingredient3.jpg",
                    contents: [],
                    src: "https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    favourite: false,
                    created_at: "2023-06-28T19:47:25",
                  },
                  {
                    type: "file",
                    id: "39b77337-ca60-499e-a282-50a3e4687c5f",
                    name: "Ingredient4.jpg",
                    contents: [],
                    src: "https://media.istockphoto.com/id/609802128/photo/open-pantone-sample-colors-catalogue.jpg?b=1&s=612x612&w=0&k=20&c=oREW0m6BfAXU5XjT2JXQDx6lotagwYi4WaDWrMyxNdM=",
                    favourite: false,
                    created_at: "2023-07-11T18:42:43",
                  },
                  {
                    type: "file",
                    id: "a300ac84-dd03-406e-b843-5adb28d8fb17",
                    name: "Ingredient5.jpg",
                    contents: [],
                    src: "https://media.istockphoto.com/id/183372756/photo/colour-samples-green.jpg?b=1&s=612x612&w=0&k=20&c=fcbPsWNX0vK4gNmlU6B0NFz6ZPbe1Pr2rw0AB646ffg=",
                    favourite: true,
                    created_at: "2023-07-17T11:07:00",
                  },
                ],
                src: "",
                favourite: false,
                created_at: "2023-06-18T23:29:38",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-05-01T07:12:43",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-01-28T03:04:14",
      },
    ],
    src: "",
    favourite: false,
    created_at: "2023-01-04T09:12:36",
  },
  {
    type: "folder",
    id: "02485ab8-eb21-4043-a586-6120b823b462",
    name: "Work",
    contents: [
      {
        type: "folder",
        id: "b0f9cf3c-3ccb-46c9-bb90-a4dd9e4d21b7",
        name: "Reports",
        contents: [
          {
            type: "file",
            id: "7232cf5c-d418-4cb7-a875-745aae05a72d",
            name: "Q1QuarterlyReport.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-07-26T23:10:22",
          },
          {
            type: "file",
            id: "a1b37db6-69f1-43ed-8c2d-fc61171c7db6",
            name: "Q2QuarterlyReport.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: true,
            created_at: "2023-08-11T12:38:50",
          },
          {
            type: "file",
            id: "3553b374-4062-49c6-96e9-b3a32bdd86b6",
            name: "Q3QuarterlyReport.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: true,
            created_at: "2023-07-31T22:03:38",
          },
          {
            type: "file",
            id: "129fa3ff-63fb-48e2-ad63-1e48b4476950",
            name: "Q4QuarterlyReport.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-05-11T04:44:48",
          },
          {
            type: "folder",
            id: "7823b78c-b28b-48f9-bf87-fc5ecb4ca219",
            name: "YearlyReports",
            contents: [
              {
                type: "file",
                id: "158e8f51-81ee-4582-8e24-8099d662ee24",
                name: "Year2020.pdf",
                contents: [],
                src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                favourite: false,
                created_at: "2023-08-12T09:34:20",
              },
              {
                type: "file",
                id: "b461275b-5d0d-44cd-9802-30f77b845a30",
                name: "Year2021.pdf",
                contents: [],
                src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                favourite: false,
                created_at: "2023-07-31T01:25:06",
              },
              {
                type: "file",
                id: "5e6af36d-ac42-4c42-9188-832e2aa68859",
                name: "Year2022.pdf",
                contents: [],
                src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                favourite: false,
                created_at: "2023-08-11T07:53:47",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-07-14T09:24:38",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-04-11T06:11:54",
      },
      {
        type: "folder",
        id: "1e61cfed-06fd-4c17-9f78-51893ed81148",
        name: "Presentations",
        contents: [
          {
            type: "file",
            id: "6cad9beb-fc7a-4b82-baea-b16eab72a2c0",
            name: "Presentation1.pdf",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-05-20T00:59:59",
          },
          {
            type: "file",
            id: "0e43aa9e-4f9b-4b66-a901-bd71ed68f3d4",
            name: "CompanyPresentation.jpg",
            contents: [],
            src: "https://media.istockphoto.com/id/1226349001/photo/color-fan-open-pantone-sample-colors-catalogue.jpg?b=1&s=612x612&w=0&k=20&c=Q79mlNpLN6D2EtV7UxIBpg25z5adEOtIMd3D2kzbh8s=",
            favourite: true,
            created_at: "2023-05-29T17:56:26",
          },
          {
            type: "folder",
            id: "99eed4cf-63c7-45a9-a4f0-14d6f4721ece",
            name: "PresentationAssets",
            contents: [
              {
                type: "file",
                id: "0126a233-5009-4f6b-aedc-6454feda1e54",
                name: "Asset1.jpg",
                contents: [],
                src: "https://media.istockphoto.com/id/1291484089/photo/close-up-of-two-women-choosing-samples-of-wall-paint-interior-designer-consulting-a-client.jpg?b=1&s=612x612&w=0&k=20&c=5Qv5-msWZ2T7OjD0HJSWHaFR9asp71gW0YvwZ5qyBYs=",
                favourite: false,
                created_at: "2023-07-14T10:33:37",
              },
              {
                type: "file",
                id: "f52a1a02-a8f4-47d6-85b9-110cd0af7fa0",
                name: "Asset2.jpg",
                contents: [],
                src: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                favourite: false,
                created_at: "2023-08-07T06:03:45",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-07-09T14:36:33",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-05-18T15:50:23",
      },
    ],
    src: "",
    favourite: false,
    created_at: "2023-02-20T04:57:31",
  },
  {
    type: "folder",
    id: "8de18f70-6b68-4d86-bb3b-bcb8e1a52f79",
    name: "Miscellaneous",
    contents: [
      {
        type: "file",
        id: "0dee86fd-5376-49a0-9d9a-f82784cd3873",
        name: "Note.txt",
        contents: [],
        src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
        favourite: false,
        created_at: "2023-07-12T10:24:26",
      },
      {
        type: "folder",
        id: "9b6eed11-6cd7-4bc5-aae6-7b74b8fca957",
        name: "Downloads",
        contents: [
          {
            type: "file",
            id: "2bd2600f-8b2c-4b32-9124-956f31c268f9",
            name: "Download1.exe",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-07-16T05:19:46",
          },
          {
            type: "file",
            id: "9bfc3102-1041-475e-8815-a185ef1a0aee",
            name: "Download2.zip",
            contents: [],
            src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
            favourite: false,
            created_at: "2023-06-17T06:12:47",
          },
          {
            type: "folder",
            id: "137b576f-66fe-484f-b7b7-4740e79d6e7f",
            name: "ArchivedDownloads",
            contents: [
              {
                type: "file",
                id: "e654eca7-2768-4145-b13b-f1fb9d885d15",
                name: "Archive1.zip",
                contents: [],
                src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                favourite: false,
                created_at: "2023-08-14T07:18:18",
              },
              {
                type: "file",
                id: "c80812a2-3152-4a46-8b0d-c0b98a35238f",
                name: "Archive2.zip",
                contents: [],
                src: "https://sustainabledevelopment.un.org/content/documents/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf",
                favourite: false,
                created_at: "2023-07-29T18:48:48",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-07-25T09:58:03",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-05-01T20:39:41",
      },
    ],
    src: "",
    favourite: false,
    created_at: "2023-02-04T05:28:13",
  },
  {
    type: "folder",
    id: "e496718a-9c4b-40f1-8a5b-92c6acace944",
    name: "Drafts",
    contents: [],
    src: "",
    favourite: false,
    created_at: "2023-01-25T19:03:54",
  },
  {
    type: "folder",
    id: "10f0e6d8-433b-4962-b3fd-27c4f95dc173",
    name: "Inbox",
    contents: [
      {
        type: "folder",
        id: "ba5c2b06-2414-4d79-8b76-980c04dc79a0",
        name: "Submissions",
        contents: [
          {
            type: "folder",
            id: "cb0e69c7-899e-405f-9b13-96e26bacf62a",
            name: "Pending",
            contents: [
              {
                type: "folder",
                id: "b661f5f3-5781-451b-933c-2c0d5152429c",
                name: "Review",
                contents: [
                  {
                    type: "folder",
                    id: "d525f51e-4401-466b-984c-732a4215d37e",
                    name: "HighPriority",
                    contents: [
                      {
                        type: "folder",
                        id: "504779b6-4cde-4263-bdf6-122958c54764",
                        name: "Urgent",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-20T18:58:19",
                      },
                      {
                        type: "folder",
                        id: "134bf5af-05f0-4a1a-9e47-28fa49ad95b3",
                        name: "Critical",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-25T12:06:24",
                      },
                      {
                        type: "folder",
                        id: "b926a5a4-3636-44a6-ae4f-90936b52fb1f",
                        name: "TopSecret",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-29T22:41:29",
                      },
                      {
                        type: "folder",
                        id: "f05d76f6-0835-4c2e-ac0d-e4c161746823",
                        name: "Confidential",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-24T12:30:24",
                      },
                      {
                        type: "folder",
                        id: "2775d9b2-4026-45f7-9dcc-635358f8ff23",
                        name: "Priority",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-25T02:54:32",
                      },
                      {
                        type: "folder",
                        id: "e90e9c77-0561-407b-bd18-c1feff46e7af",
                        name: "General",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-08-10T14:50:09",
                      },
                      {
                        type: "folder",
                        id: "9a8153b6-0ffc-405c-825a-8514c87760aa",
                        name: "Routine",
                        contents: [],
                        src: "",
                        favourite: false,
                        created_at: "2023-07-25T13:40:26",
                      },
                    ],
                    src: "",
                    favourite: false,
                    created_at: "2023-07-15T10:42:42",
                  },
                ],
                src: "",
                favourite: false,
                created_at: "2023-07-05T08:53:49",
              },
            ],
            src: "",
            favourite: false,
            created_at: "2023-06-04T01:22:11",
          },
        ],
        src: "",
        favourite: false,
        created_at: "2023-05-31T03:58:01",
      },
    ],
    src: "",
    favourite: false,
    created_at: "2023-02-21T22:12:43",
  },
];

export enum ActivePage {
  HOME = "home",
  SUBFOLDER = "subfolder",
}
export interface FilesState {
  folderFiles: Record[];
  records: Record[];
  recordsLoading: boolean;
  folderFilesLoading: boolean;
  previewedImage: Record | null;
  sortBy: {
    home: {
      key: string;
      order: string;
    };
    subfolder: {
      key: string;
      order: string;
    };
  };
}

const initialState: FilesState = {
  folderFiles: [],
  records: [],
  recordsLoading: false,
  folderFilesLoading: false,
  previewedImage: null,
  sortBy: {
    home: {
      key: "",
      order: "asc",
    },
    subfolder: {
      key: "",
      order: "asc",
    },
  },
};

export const getFolderFiles = createAsyncThunk(
  "file/getFolderFiles",
  async (payload: string, thunkAPI) => {
    try {
      return await fileService.fetchFolderFiles(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getRecords = createAsyncThunk(
  "file/getRecords",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      // return await fileService.fetchRecords();
      //simulate async call of 4 seconds
      const dummyResponse = await new Promise<Record[]>((resolve) => {
        setTimeout(() => {
          resolve(dummyRecords);
        }, 4000);
      });
      return dummyResponse;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setPreviewedImage: (state, action: PayloadAction<Record | null>) => {
      state.previewedImage = action.payload;
    },
    updateSortBy: (
      state,
      action: PayloadAction<{
        key: string;
        order: string;
        activePage: ActivePage;
      }>
    ) => {
      const { key, order, activePage } = action.payload;
      if (activePage === ActivePage.HOME) {
        state.sortBy.home.key = key;
        state.sortBy.home.order = order;
      } else if (activePage === ActivePage.SUBFOLDER) {
        state.sortBy.subfolder.key = key;
        state.sortBy.subfolder.order = order;
      }
    },
    setRecords: (state, action: PayloadAction<Record[]>) => {
      state.records = action.payload;
    },
    setFolderFiles: (state, action: PayloadAction<Record[]>) => {
      state.folderFiles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.recordsLoading = true;
      })
      .addCase(getRecords.fulfilled, (state: FilesState, action) => {
        // console.log(action.payload.data);
        state.recordsLoading = false;
        state.records = action.payload;
      })
      .addCase(getRecords.rejected, (state: FilesState, action) => {
        state.recordsLoading = false;
      })
      .addCase(getFolderFiles.pending, (state) => {
        state.folderFilesLoading = true;
      })
      .addCase(getFolderFiles.fulfilled, (state: FilesState, action) => {
        state.folderFilesLoading = false;
        state.folderFiles = action.payload;
      })
      .addCase(getFolderFiles.rejected, (state: FilesState, action) => {
        state.recordsLoading = false;
      });
  },
});

export const { setPreviewedImage, updateSortBy, setRecords, setFolderFiles } =
  fileSlice.actions;

export default fileSlice.reducer;
