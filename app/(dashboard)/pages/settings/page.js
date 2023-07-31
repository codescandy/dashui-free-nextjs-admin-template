'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="General" />

      {/* General Settings */}
      <GeneralSetting />

      {/* Email Settings */}
      {/* // DONE ... <EmailSetting /> */}

      {/* Settings for Preferences */}
      {/* // DONE ...<Preferences /> */}

      {/* Settings for Notifications */}
      {/* <Notifications /> */}

      {/* Delete Your Account */}
      <DeleteAccount />

    </Container>
  )
}

export default Settings