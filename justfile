dev:
    pnpm dev

build:
    pnpm build

test:
    pnpm vitest run --coverage

typecheck:
    pnpm tsc --noEmit

lint:
    pnpm eslint . && pnpm prettier --check .

format:
    pnpm prettier --write .

check: lint typecheck test build
