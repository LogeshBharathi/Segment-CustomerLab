# Save Segment - React Application
![Home Page](https://drive.google.com/uc?export=view&id=1MadTuYvo9dH8H_oY9kOYv-ux-1WIdAQh)
This React application allows users to create and save segments dynamically by selecting various schemas, such as first name, last name, gender, etc. The user can add multiple schemas, enter a segment name, and save the segment data to a server using a webhook.

## Features

1. **Save Segment Button**: A button labeled "Save segment" is available on the main page.
2. **Popup on Click**: 
   - Clicking the "Save segment" button opens a popup.
   - The popup contains:
     - A text box for entering the segment name.
     - A dropdown labeled "Add schema to segment" with schema options:
       - First Name, Last Name, Gender, Age, Account Name, City, State.
3. **Dynamic Schema Addition**:
   - Users can click the "+Add new schema" link to add more schemas.
   - Each schema selected is added to the popup, and unselected options remain available for future selections.
4. **Submit Data**:
   - After adding schemas, clicking "Save segment" sends the segment data to the server in the format below:
     ```json
     {
       "segment_name": "segment_name_here",
       "schema": [
         {"first_name": "First Name"},
         {"last_name": "Last Name"}
       ]
     }
     ```
   - The server endpoint is provided by [MockAPI](https://66e17e20c831c8811b553209.mockapi.io/api/v1/segments).

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/save-segment-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd save-segment-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the application locally:
   ```bash
   npm start
   ```

## How to Use

1. Navigate to the application and click the "Save segment" button.
2. Enter a segment name in the provided text box.
3. Select schemas from the "Add schema to segment" dropdown.
4. Click on "+Add new schema" to add more schema fields.
5. After adding schemas, click the "Save segment" button to send the data to the webhook.

## API Integration

- The app uses a MockAPI URL generated by [MockAPI](https://66e17e20c831c8811b553209.mockapi.io/api/v1/segments) to send segment data.
- Data is sent in the following format:
  ```json
  {
    "segment_name": "your_segment_name",
    "schema": [
      {"first_name": "First Name"},
      {"last_name": "Last Name"}
    ]
  }
  ```

## Resources

- React documentation: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
