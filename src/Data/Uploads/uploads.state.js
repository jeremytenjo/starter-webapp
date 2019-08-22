import React, { useState, createContext, useContext } from 'react'

import _uploadsRead from '../Utils/Read/read.index'
import _uploadsUpdate from '../Utils/Update/update.index'
import _uploadsCreate from '../Utils/Create/create.index'
import _uploadsDelete from '../Utils/Delete/delete.index'

export const UploadsContext = createContext(null)

export const UploadsProvider = ({ children }) => {
  // State
  const [uploads, setUploads] = useState([])
  const [initialFetchUploads, setinitialFetchUploads] = useState(null)
  const [creating, setCreating] = useState(null)
  const [reading, setReading] = useState(null)
  const [updating, setUpdating] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [lastVisibleDoc, setLastVisibleDoc] = useState('')
  const [hasFetchedAll, sethasFetchedAll] = useState(null)

  // Functions
  const initialFetch = (userId, fetchAmount) => {
    // Required function on all data states, ensures fb is not called multiple times
    if (!initialFetchUploads) {
      uploadsRead('many', userId, fetchAmount)
      setinitialFetchUploads(true)
    }
  }

  // Create
  const uploadsCreate = async (userId, file) => {
    setCreating(true)
    setUploads(await _uploadsCreate({ uploads, userId, file }))
    setCreating(false)
    setCreating(null)
  }

  // Read
  const uploadsRead = async (type, userIdorCardId, fetchAmount) => {
    setReading(true)

    const initialUploads = !initialFetchUploads ? [] : uploads
    const {
      photo = null,
      uploads: fetchedUploads = null,
      lastVisibleDoc: fetchedLastDoc = null,
      fetchedAll,
    } = await _uploadsRead(
      type,
      initialUploads,
      userIdorCardId,
      fetchAmount,
      lastVisibleDoc,
    )

    if (photo) {
      uploads.length === 0 && setUploads([photo])
      return photo
    }

    if (fetchedUploads && fetchedLastDoc) {
      setLastVisibleDoc(fetchedLastDoc)
      setUploads(fetchedUploads)
    }

    sethasFetchedAll(fetchedAll)
    setReading(false)
  }

  // Update
  const uploadsUpdate = async ({ photoId, action, field, value }) => {
    setUpdating(true)
    const { error, uploads: newUploads } = await _uploadsUpdate({
      uploads,
      photoId,
      action,
      field,
      value,
    })

    !error && setUploads(newUploads)
    setUpdating(false)
  }

  // Delete
  const uploadsDelete = async (userId, photoId, itemsIds) => {
    setDeleting(true)
    setUploads(await _uploadsDelete(uploads, userId, photoId, itemsIds))
    setDeleting(false)
  }

  return (
    <UploadsContext.Provider
      value={{
        uploads,
        uploadsCreate,
        uploadsRead,
        uploadsUpdate,
        uploadsDelete,
        initialFetch,
        creating,
        reading,
        updating,
        deleting,
        lastVisibleDoc,
        hasFetchedAll,
      }}
    >
      {children}
    </UploadsContext.Provider>
  )
}

export default () => useContext(UploadsContext)
