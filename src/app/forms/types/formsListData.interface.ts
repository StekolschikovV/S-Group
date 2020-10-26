
export interface FormsListDataInterface {
  id: number,
  user_id: number,
  created_at: string,
  updated_at: string,
  form_field_values:
    {
      id: number,
      form_id: number,
      form_field_id: number,
      value: string,
      created_at: string,
      updated_at: string,
      type: string
    }[]
  type: string
}
