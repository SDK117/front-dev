// domain/entities/User.ts
export class User {
  constructor(
    public id: number,
  public name: string,
  public email: string,
  public role: string, // 'admin' o 'cliente'
  public permissions: string[]
  ) {}
  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}
