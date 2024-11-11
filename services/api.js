import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://youutygwzeyyskixwvng.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXV0eWd3emV5eXNraXh3dm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNjc4OTQsImV4cCI6MjA0Njc0Mzg5NH0.I27VQrwimVstAYwWxPv0iGBuMsSsLUFgPsRzIKSuhK4",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXV0eWd3emV5eXNraXh3dm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNjc4OTQsImV4cCI6MjA0Njc0Mzg5NH0.I27VQrwimVstAYwWxPv0iGBuMsSsLUFgPsRzIKSuhK4"
    }
})