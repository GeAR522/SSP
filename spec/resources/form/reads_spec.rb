require 'rails_helper'

RSpec.describe FormResource, type: :resource do
  describe 'serialization' do
    let!(:form) { create(:form) }

    it 'works' do
      render
      data = jsonapi_data[0]
      expect(data.id).to eq(form.id)
      expect(data.jsonapi_type).to eq('forms')
    end
  end

  describe 'filtering' do
    let!(:form1) { create(:form) }
    let!(:form2) { create(:form) }

    context 'by id' do
      before do
        params[:filter] = { id: { eq: form2.id } }
      end

      it 'works' do
        render
        expect(d.map(&:id)).to eq([form2.id])
      end
    end
  end

  describe 'sorting' do
    describe 'by id' do
      let!(:form1) { create(:form) }
      let!(:form2) { create(:form) }

      context 'when ascending' do
        before do
          params[:sort] = 'id'
        end

        it 'works' do
          render
          expect(d.map(&:id)).to eq([
            form1.id,
            form2.id
          ])
        end
      end

      context 'when descending' do
        before do
          params[:sort] = '-id'
        end

        it 'works' do
          render
          expect(d.map(&:id)).to eq([
            form2.id,
            form1.id
          ])
        end
      end
    end
  end

  describe 'sideloading' do
    # ... your tests ...
  end
end
