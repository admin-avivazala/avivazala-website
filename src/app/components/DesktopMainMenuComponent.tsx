export default function DesktopMenuComponent() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 11</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2" style={{ marginTop: '4px' }}>
            <li>
              <a>Submenu 11</a>
            </li>
            <li>
              <a>Submenu 22</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 33</a>
      </li>
    </ul>
  );
}
