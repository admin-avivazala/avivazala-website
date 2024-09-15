import { StructureBuilder } from 'sanity/structure';

const groups = [
  {
    name: 'Content',
    menuGroups: [
      ['page'],
      ['post', 'postCategory', 'author'],
      ['event', 'eventType'],
      ['contactForm']
    ]
  },
  {
    name: 'Settings',
    menuGroups: [['navigation'], ['languagesAvailable'], ['customSettings']]
  }
];

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Main menu')
    .items([
      ...groups.map((group, i) => {
        return S.listItem()
          .title(group.name)
          .child(
            S.list()
              // Sets a title for our new list
              .title(group.name)
              // Add items to the array
              // Each will pull one of our new singletons
              .items(
                group.menuGroups.flatMap((menuGroup) => [
                  S.divider(),
                  ...menuGroup.map((sType) =>
                    S.documentTypeListItem(sType).id(sType).schemaType(sType)
                  )
                ])
              )
          );
      })
    ]);
