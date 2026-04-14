dev:
    pnpm dev

build:
    pnpm build

test:
    pnpm vitest run --coverage

typecheck:
    pnpm tsc --noEmit

lint:
    pnpm eslint .

check: lint typecheck test
