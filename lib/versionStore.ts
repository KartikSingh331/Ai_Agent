let versions: any[] = []

export function saveVersion(version: any) {
  versions.push(version)
}

export function getLatestVersion() {
  return versions[versions.length - 1]
}

export function rollback(index: number) {
  return versions[index]
}
