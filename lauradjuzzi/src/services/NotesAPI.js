import axios from 'axios'

const API_URL = "https://zeveytgfdxwxblxpgnku.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpldmV5dGdmZHh3eGJseHBnbmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwODY5NzcsImV4cCI6MjA2NTY2Mjk3N30.Ikzu3C_tB8frKYNQDZR1IsM49ndkKh_eDmJeYaha7To"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

     async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
