export interface BackendErrorsInterface {
  error: {
    errors:
      {
        id: string
        status: number
        code: string
        title: string
        meta: []
      }[]
  }
}
