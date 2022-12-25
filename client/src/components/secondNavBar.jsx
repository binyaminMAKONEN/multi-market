import React from 'react'
import { Navbar,Dropdown,Avatar ,Label,TextInput} from 'flowbite-react'
import { ImLocation } from 'react-icons/im';


function SecondNavBar() {
  
  
  return (
    <div>
         <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="#">
    <img
      src="https://i.postimg.cc/D0skf82c/2022-12-08-210836-preview-rev-1.png"
      className="mr-3 h-6 sm:h-9 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <p className='self-center'>מודיעין</p>
    <button>  <ImLocation className='text-2xl ml-1 mr-3 text-lime-500'/></button>
    <p className='self-center md:mr-1 xl:mr-2'>שלום דנה</p>


    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
        
      <Dropdown.Header>
        <span className="block text-sm">
        שלום דנה
        </span>
        <span className="block truncate text-sm font-medium">
          dana@gmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    
    <div>
    <div className="mb-2 block">
      <Label
        htmlFor="small"
       
      />
    </div>
    
    <TextInput
      id="small"
      type="text"
      sizing="sm"
      className='w-64 '

      
    />
    
  </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default SecondNavBar