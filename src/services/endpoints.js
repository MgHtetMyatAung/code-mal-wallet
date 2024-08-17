const CRYPTO_BASE_URL = import.meta.env.VITE_APP_CRYPTO_URL;
const COINLAYER_BASE_URL = import.meta.env.VITE_APP_COINLAYER_URL;

export const endpointsConfig = [
  {
    name: "auth",
    baseUrl: CRYPTO_BASE_URL,
    tagTypes: ["AUTH"],
    endpoints: [
      {
        name: "login",
        path: "/auth/login",
        method: "POST",
        access_token: false,
        providesTags: (result, error, { productId, reviewId }) => [
          { type: "ProductReview", productId, reviewId },
        ],
      },
      {
        name: "register",
        path: "/auth/signup",
        method: "POST",
        access_token: false,
        invalidatesTags: (result, error, { productId, reviewId }) => [
          { type: "ProductReview", productId, reviewId },
        ],
      },
    ],
  },
  {
    name: "user",
    baseUrl: CRYPTO_BASE_URL,
    tagTypes: ["USERS"],
    endpoints: [
      {
        name: "getUsers",
        path: "/users",
        method: "GET",
        access_token: false,
        providesTags: ["Users", "AUTH"],
      },
      {
        name: "getUserById",
        path: "/users/:id",
        method: "GET",
        access_token: true,
        providesTags: (result, error, id) => [{ type: "User", id }],
      },
      {
        name: "createUser",
        path: "/users",
        method: "POST",
        access_token: true,
        invalidatesTags: ["Users"],
      },
    ],
  },
  {
    name: "product",
    baseUrl: CRYPTO_BASE_URL,
    tagTypes: ["PRODUCTS"],
    endpoints: [
      {
        name: "getProductReviews",
        path: "/products/:productId/reviews/:reviewId",
        method: "GET",
        access_token: true,
        providesTags: (result, error, { productId, reviewId }) => [
          { type: "ProductReview", productId, reviewId },
        ],
      },
      {
        name: "updateProductReview",
        path: "/products/:productId/reviews/:reviewId",
        method: "PUT",
        access_token: true,
        invalidatesTags: (result, error, { productId, reviewId }) => [
          { type: "ProductReview", productId, reviewId },
        ],
      },
    ],
  },
  {
    name: "list",
    baseUrl: COINLAYER_BASE_URL,
    tagTypes: ["LIST"],
    endpoints: [
      {
        name: "getListData",
        path: "/list",
        method: "GET",
        access_token: true,
        // providesTags: (result, error, { productId, reviewId }) => [
        //   { type: "ProductReview", productId, reviewId },
        // ],
      },
      {
        name: "updateProductReview",
        path: "/products/:productId/reviews/:reviewId",
        method: "PUT",
        access_token: true,
        invalidatesTags: (result, error, { productId, reviewId }) => [
          { type: "ProductReview", productId, reviewId },
        ],
      },
    ],
  },
  // Add more endpoints as needed
];
