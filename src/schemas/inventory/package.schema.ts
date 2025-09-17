export const packageSchema = {
  getPackage: (query: string) => `
    query getPackage($package: PackageInput!) {
      package(package: $package) {
        ${query}
      }
    }
  `,

  getPackages: (query: string) => `
    query getPackages($package: PackageInput, $packageIds: [String], $limit: Int!, $skip: Int!) {
      packages(package: $package, packageIds: $packageIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,

  addPackage: (mutation: string) => `
    mutation addPackage($package: PackageInput!) {
      addPackage(package: $package) {
        ${mutation}
      }
    }
  `,

  updatePackage: (mutation: string) => `
    mutation updatePackage($packageId: String!, $package: PackageInput!) {
      updatePackage(packageId: $packageId, package: $package) {
        ${mutation}
      }
    }
  `,

  removePackage: (mutation: string) => `
    mutation removePackage($packageId: String!) {
      removePackage(packageId: $packageId) {
        ${mutation}
      }
    }
  `
}
