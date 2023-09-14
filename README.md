### Live Link: https://book-catalog-prisma-jawadjisan.vercel.app/

## Application Routes:

### User

- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/auth/signup(POST)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/auth/signin(POST)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/users/ (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/users/9b2b952a-9da8-4a3f-87d7-db2773570be1 (Single GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/users/9b2b952a-9da8-4a3f-87d7-db2773570be1 (PATCH)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/users/c973cd2b-44c4-4918-8a9b-61e4003db3e3/ (DELETE)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/profile/ (GET)

### Category

- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/categories/create-category (POST)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/categories/ (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/categories/ef797934-1d9e-410e-9c91-eb1cca6ab0f9 (Single GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/categories/ef797934-1d9e-410e-9c91-eb1cca6ab0f9 (PATCH)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/categories/57f785d9-38e1-48aa-917e-039f09492f1c (DELETE)

### Books

- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books/create-book/ (POST)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books/ef797934-1d9e-410e-9c91-eb1cca6ab0f9/category (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books/688f316b-5982-427f-9c21-1161c0772c09 (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books/688f316b-5982-427f-9c21-1161c0772c09 (PATCH)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/books/688f316b-5982-427f-9c21-1161c0772c09 (DELETE)

### Orders

- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/orders/create-order (POST)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/orders (GET)
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/orders (GET) [for specefic customer using jwt token]
- https://book-catalog-prisma-jawadjisan.vercel.app/api/v1/orders/acd442d1-1566-488f-abda-33930a1c9b3a (GET)
