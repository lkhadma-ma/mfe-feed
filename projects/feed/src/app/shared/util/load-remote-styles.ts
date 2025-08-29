export async function loadRemoteStyles(mfeName: string) {
  try {

    const federationManifestRes = await fetch('federation.manifest.json');
    const federationManifest = await federationManifestRes.json();

    const remoteEntryUrl = federationManifest[mfeName];

    if (!remoteEntryUrl) {
      console.error(`Failed to load remote styles: No entry found for "${mfeName}"`);
      return;
    }

    const baseUrl = remoteEntryUrl.replace('/remoteEntry.json', '');

    const stylesManifestRes = await fetch(`${baseUrl}/styles-manifest.json`);
    const stylesManifest = await stylesManifestRes.json();

    const stylesFileName = stylesManifest['styles'];
    if (!stylesFileName) {
      console.error(`Failed to load remote styles: No "styles" found in styles-manifest.json for "${mfeName}"`);
      return;
    }

    const manifestUrl = `${baseUrl}/${stylesFileName}`;

    // Append stylesheet to document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = manifestUrl;
    document.head.appendChild(link);

  } catch (error) {
    console.error('Failed to load remote styles:', error);
  }
}
