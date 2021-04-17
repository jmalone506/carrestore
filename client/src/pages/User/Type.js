import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const experienceOptions = [
    {
        key: 'Beginner',
        text: 'Beginner',
        value: 'Beginner',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Intermediate',
        text: 'Intermediate',
        value: 'Intermediate',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Expert',
        text: 'Expert',
        value: 'Expert',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
    },
]

const DropdownExampleSelection = () => (
    <Dropdown
        placeholder='Select Level of Experience'
        fluid
        selection
        options={experienceOptions}
    />
)

export default DropdownExampleSelection