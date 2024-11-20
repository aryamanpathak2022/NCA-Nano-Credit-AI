import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from google.ai.generativelanguage import Content, Part, Blob
from langchain_core.output_parsers import StrOutputParser
from langchain_google_genai import ChatGoogleGenerativeAI

# Load environment variables
load_dotenv()

# Retrieve API key from environment variable
API_KEY = os.getenv("GOOGLE_API_KEY")
if not API_KEY:
    raise Exception("API key not found. Please set the GOOGLE_API_KEY environment variable.")
else:
    genai.configure(api_key=API_KEY)  # Configure the API key

# Initialize the Google Gemini model
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)

# Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/analyze', methods=['POST'])
def analyze_data():
    try:
        # Parse the JSON data sent by the frontend
        data = request.get_json()

        # Extract fields from the incoming data
        vendor_name = data.get('vendorName', '')
        print(vendor_name)
        business_name = data.get('businessName', '')
        print(business_name)
        business_title = data.get('businessTitle', '')
        print(business_title)
        location = data.get('location', '')
        print(location)
        welfare_scheme = data.get('welfareScheme', '')
        print(welfare_scheme)

        enterprise_images = data.get('enterpriseImages', [])
        print(enterprise_images)

        shop_location = data.get('shopLocation', '')
        print(shop_location)
        family_members = data.get('familyMembers', '')
        print(family_members)


        enterprise_images = data.get('enterpriseImages', [])
        survey_link = data.get('surveyLink', '')
        print(survey_link)
        government_ids = data.get('governmentIds', [])
        print(government_ids)

        # Validate required fields
        if not vendor_name or not business_name:
            return jsonify({"error": "Vendor name and business name are required."}), 400

        # Process images if provided
        image_analysis_results = []
        for image_data in enterprise_images:
            # Assuming enterprise_images contains base64-encoded images
            file_type = "image/jpeg"  # Example; update if file type is included in the frontend
            blob_data = bytes(image_data, encoding='utf-8')
            
            # Prepare the content parts with the image data
            content_parts = [
                Part(text=f"Analyze the image for the business {business_name} titled {business_title}."),  # System message with instructions
                Part(inline_data=Blob(mime_type=file_type, data=blob_data))  # The image as binary data
            ]

            # Generate the content
            response = genai.GenerativeModel('gemini-1.5-pro').generate_content(Content(parts=content_parts))
            response.resolve()
            
            # Parse the AI's analysis result
            parser = StrOutputParser()
            parsed_response = parser.invoke(response.text)

            # Collect analysis results
            image_analysis_results.append(parsed_response)

        # Combine all results into the final output
        final_result = {
            "vendorName": vendor_name,
            "businessName": business_name,
            "businessTitle": business_title,
            "location": location,
            "welfareScheme": welfare_scheme,
            "familyMembers": family_members,
            "shopLocation": shop_location,
            "enterpriseImagesAnalysis": image_analysis_results,
            "surveyLink": survey_link,
            "governmentIds": government_ids
        }

        # Return the result as JSON
        return jsonify(final_result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
