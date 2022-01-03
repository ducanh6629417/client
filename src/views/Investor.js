import React from 'react'

const Investor = (props) => {
    return (
        <div>


            
           <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Drop down field
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <select name="" class="form-select block w-full focus:bg-white" id="my-select">
                                <option value="Default">Default</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                            <p class="py-2 text-sm text-gray-600">add notes about populating the field</p>
                        </div>
                    </div>
        </div>
    )
}

export default Investor
