require 'rails_helper'

RSpec.describe "forms#update", type: :request do
  subject(:make_request) do
    jsonapi_put "ssp/forms/#{form.id}", payload
  end

  describe 'basic update' do
    let!(:form) { create(:form) }

    let(:payload) do
      {
        data: {
          id: form.id.to_s,
          type: 'forms',
          attributes: {
            # ... your attrs here
          }
        }
      }
    end

    # Replace 'xit' with 'it' after adding attributes
    xit 'updates the resource' do
      expect(FormResource).to receive(:find).and_call_original
      expect {
        make_request
        expect(response.status).to eq(200), response.body
      }.to change { form.reload.attributes }
    end
  end
end
