import React from 'react'
import { Navbar,Dropdown,Avatar ,Label,TextInput} from 'flowbite-react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { RxTextAlignRight } from 'react-icons/rx';

function ThirdNavbar() {
  return (
    <div >
        <Navbar
        className='border-red-900 border-3'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="#">
    <img
      src="https://i.postimg.cc/3N22WDJz/Multi-Market-Logo-preview-rev-1.png"
      className="mr-3 h-9 sm:h-16 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <button>  <AiOutlineShoppingCart className='text-2xl'/></button>
    <button>  <RxTextAlignRight className='text-2xl ml-1'/></button>
    <button>  <ImLocation className='text-2xl ml-1 mr-3 text-red-500'/></button>


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
    <div className=" block">
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

export default ThirdNavbar