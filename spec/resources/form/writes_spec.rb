require 'rails_helper'

RSpec.describe FormResource, type: :resource do
  describe 'creating' do
    let(:payload) do
      {
        data: {
          type: 'forms',
          attributes: attributes_for(:form)
        }
      }
    end

    let(:instance) do
      FormResource.build(payload)
    end

    it 'works' do
      expect {
        expect(instance.save).to eq(true), instance.errors.full_messages.to_sentence
      }.to change { Form.count }.by(1)
    end
  end

  describe 'updating' do
    let!(:form) { create(:form) }

    let(:payload) do
      {
        data: {
          id: form.id.to_s,
          type: 'forms',
          attributes: { } # Todo!
        }
      }
    end

    let(:instance) do
      FormResource.find(payload)
    end

    xit 'works (add some attributes and enable this spec)' do
      expect {
        expect(instance.update_attributes).to eq(true)
      }.to change { form.reload.updated_at }
      # .and change { form.foo }.to('bar') <- example
    end
  end

  describe 'destroying' do
    let!(:form) { create(:form) }

    let(:instance) do
      FormResource.find(id: form.id)
    end

    it 'works' do
      expect {
        expect(instance.destroy).to eq(true)
      }.to change { Form.count }.by(-1)
    end
  end
end
