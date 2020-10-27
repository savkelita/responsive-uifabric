import { useBoolean } from '@uifabric/react-hooks'
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel'
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona'
import { Stack } from 'office-ui-fabric-react/lib/Stack'
import { TextField } from 'office-ui-fabric-react/lib/TextField'

import React from 'react'

const examplePersona: IPersonaSharedProps = {
  imageUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQGMqGUznb0EMA/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=_IqV-s7gXob4UP1rPqy6DZucR7a9VSHntMnfoWU_1pY',
  imageInitials: 'MS',
  text: 'Marko Savic',
  secondaryText: 'Programmer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
}

const navGroups: INavLinkGroup[] = [
  {
    links: [
      {
        key: 'files',
        name: 'Files',
        url: '#files',
      },
      {
        key: 'recent',
        name: 'Recent',
        url: '#recent',
      },
      {
        key: 'photos',
        name: 'Photos',
        url: '#photos',
      },
      {
        key: 'shared',
        name: 'Shared',
        url: '#shared',
      },
      {
        key: 'recyclebin',
        name: 'Recycle bin',
        url: '#recyclebin',
      },
    ],
  },
]

const CustomNavigation: React.FunctionComponent = () => {
  const [isOpen, { toggle: showNav }] = useBoolean(true)

  return (
    <div
      style={{
        overflow: 'hidden',
        ...(isOpen ? { width: '17rem', transition: 'all 0.3s' } : { width: '2rem' }),
      }}
      className="app-sidemenu ms-hiddenSm"
    >
      <IconButton
        onClick={showNav}
        style={{ alignSelf: 'flex-end' }}
        iconProps={{
          iconName: isOpen ? 'DoubleChevronLeft8' : 'DoubleChevronRight8',
        }}
      />
      <Nav
        styles={{
          root: {
            overflow: 'hidden',
          },
        }}
        groups={navGroups}
      />
    </div>
  )
}

const PanelBasicExample: React.FunctionComponent = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false)

  return (
    <>
      <IconButton
        // tslint:disable-next-line: jsx-no-lambda
        onClick={openPanel}
        iconProps={{
          iconName: 'GlobalNavButton',
        }}
        title="Open navigation"
        className="ms-hiddenMdUp"
        styles={{
          rootHovered: {
            backgroundColor: 'transparent',
            color: '#ccc',
          },
          rootPressed: {
            backgroundColor: 'transparent',
          },
          icon: {
            color: '#fff',
          },
        }}
      />
      <Panel type={PanelType.smallFixedNear} isOpen={isOpen} onDismiss={dismissPanel} closeButtonAriaLabel="Close">
        <Nav groups={navGroups} />
      </Panel>
    </>
  )
}

const itemsWithHeading: IBreadcrumbItem[] = [
  { text: 'Home', key: 'Files', onClick: undefined },
  { text: 'Custom Software Department', key: 'd1', onClick: undefined },
  { text: 'Marko Savic', key: 'd2', isCurrentItem: true, as: 'h4' },
]

export const App = () => {
  return (
    <div className="App">
      <Stack className="app-header" horizontal={true} horizontalAlign="space-between">
        <div className="app-logo">
          <PanelBasicExample />
          <span>SAGA</span>
        </div>
        <div className="app-user">
          <Persona
            {...examplePersona}
            // tslint:disable-next-line: jsx-no-lambda
            onRenderSecondaryText={(props, defaultRender) =>
              defaultRender && props ? <div className="ms-hiddenSm">{defaultRender(props)}</div> : null
            }
            // tslint:disable-next-line: jsx-no-lambda
            onRenderPrimaryText={(props, defaultRender) =>
              defaultRender && props ? <div className="ms-hiddenSm">{defaultRender(props)}</div> : null
            }
            styles={{
              details: {
                order: -1,
              },
              primaryText: {
                ':hover': {
                  color: '#fff',
                },
                color: '#fff',
              },
              secondaryText: {
                textAlign: 'right',
                color: '#ccc',
              },
            }}
            size={PersonaSize.size40}
            presence={PersonaPresence.online}
            imageAlt="Marko Savic status is online."
          />
        </div>
      </Stack>
      <div className="app-container">
        <CustomNavigation />
        <div className="app-content">
          <Breadcrumb
            style={{ marginBottom: 50 }}
            items={itemsWithHeading}
            ariaLabel="With last item rendered as heading"
            overflowAriaLabel="More links"
          />
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6">
                <Stack>
                  <TextField label="Standard" />
                  <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
                  <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
                  <TextField label="Required " required={true} />
                </Stack>
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6">
                <Stack>
                  <TextField label="Standard" />
                  <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
                  <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
                  <TextField label="Required " required={true} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
