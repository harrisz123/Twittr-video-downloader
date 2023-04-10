
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('download-form');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const url = document.getElementById('url-input').value.trim();

      if (!url) {
        alert('Please enter a valid URL');
        return;
      }

      const response = await fetch('/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });

      const data = await response.json();

      if (data.success) {
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', data.url);
        downloadLink.setAttribute('download', '');
        downloadLink.click();
      } else {
        alert('An error occurred while downloading the video');
      }
    });
  }
});
