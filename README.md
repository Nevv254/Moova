# Moova
A website for an automotive leasing company 

## Website Structure

The website is a multi-page static site, with each major section residing in its own HTMl file.
* **`index.html`**: The main landing page(Home).
* **`bookings.html`**: Provides a form to fill out the lease details.
* **`lisitings.html`**: Displays the available automotive lisitings that are available for lease.
* **`contact.html`**: Includes a contact form (static, requires backend integration for live submission) and other ways to get in touch.

## Features

* **Responsive Design**: Adapts to various screen sizes (desktop, tablet, mobile) using Tailwind CSS's utility classes.
* **Mobile-First Navigation**: Features a hamburger menu for smaller screens that expands to show navigation links, ensuring a good user experience on all devices. The navigation is implemented using CSS-only techniques (the "checkbox hack").
* **Sticky Navigation**: The navigation bar remains at the top of the viewport as the user scrolls.
* **Semantic HTML**: Structured with semantic HTML5 tags for better accessibility and SEO.
* **Tailwind CSS Styling**: Leverages the utility-first Tailwind CSS framework for rapid UI development and consistent styling.
* **Clear Call-to-Actions**: Designed to guide users towards learning more about services or contacting the company.
* **Informative Content Sections**: Well-defined sections for showcasing services, company information, and contact details.
* **Ionicons Icons**: Uses ionicons for icons to ensure scalability and crisp rendering on all displays.

## Technologies Used

* **HTML5**: For the basic structure and content of the website.
* **Tailwind CSS v3**: For all styling and responsive design. Loaded via CDN.
* **Google Fonts (Inter)**: For a clean and modern typography.
* **Ionicons**: For iconography.
* **Javascript**: For page functionality.

## Setup and Usage

1.  **Clone the repository (if applicable) or download the files.**
    ```bash

    $ git clone https://github.com/Nevv254/Moova.git

    $ cd Moova
    ```
2.  **Open HTML Files in a Browser**:
    Simply open any of the `.html` files (e.g., `index.html`) in your web browser to view the website. No build process or local server is strictly required for viewing, as it's a static site.

    ## File Overview

* `index.html`: Home page.
* `lisitings.html`: Emergency Request page.
* `Bookings.html`: Inventory page.
* `contact.html`: Contact Us page.
* `thanks.html`: Confirmation page after submitting the contact form.
* `moova.json` : Sample data used for search functionality

## Navigation Details

The navigation menu is designed to be responsive:
* **Desktop/Large Screens**: Displays a horizontal list of links.
* **Tablet/Mobile Screens**: Displays a hamburger icon. Clicking this icon reveals a vertical list of navigation links. This is achieved using a hidden checkbox and CSS sibling selectors (`#menu-toggle:checked + label + div#menu-links`). When the mobile menu is opened, it pushes the page content down rather than overlaying it.
**Sticky Navigation**: The nav bar stays pinned to the top for easy access.

## Contact Form
The form in `contact.html` is powered by [**Formspree**](https://formspree.io).
 Upon submission:
  - The form validates and sends user input via Formspree.
  - Users are redirected to `thanks.html` after a short delay.
  - Optional JavaScript triggers a confirmation message before redirection.


## Customization

* **Content**: Edit the text content directly within the HTML files in the respective sections.
* **Styling**:
    * Most styling can be adjusted by changing Tailwind CSS classes on the HTML elements.
    * For custom CSS (e.g., `nav-link-active`, `hero-bg`, hamburger menu logic), modify the `<style>` block in the `<head>` of each HTML file.
* **Images**: Placeholder images are used (from `placehold.co`). Replace these with your actual company images.
* **Ionicons Icons**: Modify the inline  code if different icons are desired.
* **Forms**Modal forms for adding, editing, and viewing stock 

## Technologies Used

- **HTML5**: Markup structure and content layout.
- **Tailwind CSS v3**: Responsive and utility-first styling.
- **JavaScript (ES6)**: Adds interactivity and logic (search, modals, dashboards).
- **Google Fonts (Inter)**: Clean and modern web typography.
- **Ionicons**: Stylish icons for UI enhancement.
- **Formspree**: Handles contact form submissions without backend code.

## Future Enhancements (Suggestions)
* **AI-driven supply forecasting**
* **Firebase/Backend integration for real-time listings**
* **Integration with transport tracking APIs**  
* **Integration with transport systems**
* **Mobile app version**







