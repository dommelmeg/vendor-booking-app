import React from "react"
import { Divider, FormControl, FormLabel, Input } from "@chakra-ui/react"

const AddVendorHiddenInput = ({ vendorNameInput, setVendorNameInput, genreInput, setGenreInput }) => {
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
        <FormLabel mt='2'>Genre</FormLabel>
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