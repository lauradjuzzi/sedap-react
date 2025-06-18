import { useState, useEffect } from 'react'
import { notesAPI } from "../services/NotesAPI"
import AlertBox from '../components/AlertBox'
import GenericTable from '../components/GenericTable'
import EmptyState from '../components/EmptyState'
import LoadingSpinner from '../components/LoadingSpinner'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"


export default function Notes() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [dataForm, setDataForm] = useState({
        title: "", content: ""
    })
    const [notes, setNotes] = useState([])
    const [editId, setEditId] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadNotes()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess("")

        try {
            if (editId) {
                // Mode edit
                await notesAPI.updateNote(editId, dataForm)
                setSuccess("Catatan berhasil diperbarui!")
            } else {
                // Mode tambah
                await notesAPI.createNote(dataForm)
                setSuccess("Catatan berhasil ditambahkan!")
            }

            setDataForm({ title: "", content: "" })
            setEditId(null)
            loadNotes()

            setTimeout(() => setSuccess(""), 3000)
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }


    // Handle untuk aksi hapus data
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            // Refresh data
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    // Handle untuk aksi edit data
    const handleEdit = (note) => {
        setDataForm({ title: note.title, content: note.content })
        setEditId(note.id)
        window.scrollTo({ top: 0, behavior: "smooth" }) // scroll ke form
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Notes App
                </h2>
            </div>

            {/* Form Tambah Catatan */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Tambah Catatan Baru
                </h3>

                {error && <AlertBox type="error">{error}</AlertBox>}
                {success && <AlertBox type="success">{success}</AlertBox>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        required
                        disabled={loading}
                        rows="2"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200 resize-none"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Data"
                            ? "Simpan Perubahan" : "Tambah Data"}
                    </button>
                </form>
            </div>

            {/* Daftar Catatan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>

                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                )}

                {!loading && notes.length > 0 && (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        {note.content}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        <button
                                            onClick={() => handleEdit(note)}
                                            disabled={loading}
                                        >
                                            <AiFillEdit className="text-blue-500 text-2xl hover:text-blue-700 transition-colors" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            disabled={loading}
                                        >
                                            <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                                        </button>
                                    </div>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
        </div>
    )
}
