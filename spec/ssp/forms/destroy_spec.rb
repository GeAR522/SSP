require 'rails_helper'

RSpec.describe "forms#destroy", type: :request do
  subject(:make_request) do
    jsonapi_delete "ssp/forms/#{form.id}"
  end

  describe 'basic destroy' do
    let!(:form) { create(:form) }

    it 'updates the resource' do
      expect(FormResource).to receive(:find).and_call_original
      expect {
        make_request
        expect(response.status).to eq(200), response.body
      }.to change { Form.count }.by(-1)
      expect { form.reload }
        .to raise_error(ActiveRecord::RecordNotFound)
      expect(json).to eq('meta' => {})
    end
  end
end
