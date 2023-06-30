import React, { useState } from "react"
import { Divider, FormControl, FormLabel, Input } from "@chakra-ui/react"

const AddVendorHiddenInput = () => {
  const [vendorNameInput, setVendorNameInput] = useState('')
  const [genreInput, setGenreInput] = useState('')

  return (
    <>
      <Divider mt='4' />
      <FormControl>
        <FormLabel mt='4'>Vendor Name</FormLabel>
        <Input 
          placeholder='Vendor Name'
          onChange={(e) => setVendorNameInput(e.target.value)}
          type="text"
          value={vendorNameInput}
          />
      </FormControl>

      <FormControl>
        <FormLabel>Genre</FormLabel>
        <Input 
          placeholder='Genre'
          onChange={(e) => setGenreInput(e.target.value)}
          type="text"
          value={genreInput}
          />
      </FormControl>
    </>
)
}

export default AddVendorHiddenInput