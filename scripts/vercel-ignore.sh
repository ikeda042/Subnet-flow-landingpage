#!/usr/bin/env bash
set -eu

# 前のコミットが存在しない場合（初回デプロイなど）は必ずビルドする
if ! git rev-parse --verify HEAD^ >/dev/null 2>&1; then
  echo "No parent commit, run build."
  exit 1
fi

# frontend/dist/ に変更があるか確認
CHANGED=$(git diff --name-only HEAD^ HEAD)

if echo "$CHANGED" | grep -q "^frontend/dist/"; then
  echo "frontend/dist/ changed → build needed"
  exit 1
else
  echo "No changes in frontend/dist/ → skip build"
  exit 0
fi