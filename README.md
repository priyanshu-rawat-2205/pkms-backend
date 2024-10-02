# PKMS
_welcome to the official pkms-backend repo. API documentations is coming soon_

### Requirements:
    bun

### Instructions to run locally:

```bash
# install dependencies
bun install

# setup migrations
bun db:push
bun db:migrate

# seed the database
bun db:seed

# run the application on port 3000
bun start
```

### Instructions to build:

```bash
bun run build
```