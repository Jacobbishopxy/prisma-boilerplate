# EI Prisma

1. Introspect database, result shows in `prisma/shcema.prisma`
    
    ```
    cd prisma
    prisma introspect
    ```

2. Generate prisma client, which updated `src/generated` & `schema.graphql`

    ```
    cd prisma
    prisma generate
    ```

3. Update `schema.ts`, then `yarn`, `schema.graphql` should be updated in root

