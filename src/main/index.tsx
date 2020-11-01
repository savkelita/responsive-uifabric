import { useBoolean } from '@uifabric/react-hooks'
// import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb'
import { IconButton, DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel'
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona'
import { Separator } from 'office-ui-fabric-react/lib/Separator'
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
      <div style={{ overflow: 'auto' }}>
        <Nav
          styles={{
            root: {
              // Todo: Custom Scrollbar
              overflow: 'hidden',
            },
          }}
          groups={navGroups}
        />
      </div>
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

// const _itemsWithHeading: IBreadcrumbItem[] = [
//   { text: 'Home', key: 'Files', onClick: undefined },
//   { text: 'Custom Software Department', key: 'd1', onClick: undefined },
//   { text: 'Marko Savic', key: 'd2', isCurrentItem: true, as: 'h4' },
// ]

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
          <div className="filter">
            <div className="fields">
              <TextField label="Standard One" value="Marko Savic Savke" />
              <TextField label="Standard Two" />
              <TextField label="Standard Three" />
              <TextField label="Standard Four" />
              <TextField label="Standard Five" />
              <TextField label="Standard Five" />
              <TextField label="Standard Five" />
            </div>
            <div className="buttons">
              <DefaultButton
                styles={{ root: { minWidth: 40, borderColor: '#ddd' } }}
                iconProps={{ iconName: 'Search' }}
              />
              <DefaultButton
                styles={{ root: { minWidth: 40, borderColor: '#ddd' } }}
                iconProps={{ iconName: 'EraseTool' }}
              />
            </div>
          </div>
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md12">
                <h3>Vertical</h3>
                <Stack styles={{ root: { marginBottom: 20 } }}>
                  <Stack.Item grow={1}>
                    <TextField label="Standard" />
                  </Stack.Item>
                  <Stack.Item grow={1}>
                    <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
                  </Stack.Item>
                  <Stack.Item grow={1}>
                    <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
                  </Stack.Item>
                  <Stack.Item grow={1}>
                    <TextField label="Required " required={true} />
                  </Stack.Item>
                </Stack>
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md12">
                <h3>Horizontal</h3>
                <Stack style={{ marginBottom: 20 }} horizontal={true} wrap={true} tokens={{ childrenGap: 10 }}>
                  <Stack.Item grow={1} disableShrink={true}>
                    <TextField label="Standard" />
                  </Stack.Item>
                  <Stack.Item grow={1} disableShrink={true}>
                    <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
                  </Stack.Item>
                  <Stack.Item grow={1} disableShrink={true}>
                    <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
                  </Stack.Item>
                  <Stack.Item grow={1} disableShrink={true}>
                    <TextField label="Required " required={true} />
                  </Stack.Item>
                </Stack>
              </div>
            </div>
          </div>
          <Separator styles={{ root: { margin: '30px 0px' } }}>Separate grids</Separator>
          <Stack horizontal={true} tokens={{ childrenGap: 10 }} wrap={true}>
            <Stack grow={1}>
              <h3>Vertical Column 1</h3>
              <Stack.Item>
                <TextField label="Standard" />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
              </Stack.Item>
              <Stack.Item>
                <TextField
                  label="Standard input from republic of serbia with long label "
                  readOnly={true}
                  defaultValue="I am read-only"
                />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Required " required={true} />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Required " required={true} />
              </Stack.Item>
            </Stack>
            <Stack grow={1}>
              <h3>Vertical Column 2</h3>
              <Stack.Item>
                <TextField label="Standard input from republic of serbia with long label baz basr" />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Required " required={true} />
              </Stack.Item>
              <Stack.Item>
                <TextField label="Required " required={true} />
              </Stack.Item>
            </Stack>
          </Stack>
          <div className="w">
            <div className="a">
              <h3>Vertical Column 1</h3>
              <TextField label="Standard" />
              <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
              <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
              <TextField label="Required " required={true} />
              <TextField label="Required " required={true} />
            </div>
            <div className="b">
              <h3>Vertical Column 2</h3>
              <div>
                <TextField label="Standard input from republic of serbia with long label" />
              </div>
              <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
              <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
              <TextField label="Required " required={true} />
              <TextField label="Required " required={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
