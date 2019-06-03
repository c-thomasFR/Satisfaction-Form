<template>
    <div id="app">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                </b-col>
                <b-col cols="6">
                    <b-card class="text-center" id='card-satisfaction'>
                         <div class="text-center">
                            <h3 ref="title">How satisfied are you ?</h3>
                             <br />
                             <br />
                            <b-container class="bv-example-row">
                                <b-row align-v="center">
                                    <b-col>
                                        <span style="color:#BCBBC1;">
                                            <icon-base icon-name="emojiNeutral"><icon-emojiNeutral /></icon-base>
                                            <br>
                                        </span>
                                    </b-col>
                                    <b-col cols="9">
                                        <vue-slider
                                                v-model="value"
                                                ref="slider"
                                                :data="data"
                                                v-bind="options"
                                                :marks="true"
                                                :hide-label="true"
                                                :process="process1"
                                                @drag-end="onDragEnd"
                                                @drag-start="onDragStart"
                                        >
                                            <!-- C'est ici que je customise le tooltip lorsqu'on clique sur le slider pour afficher l'emoji-->
                                            <div slot="tooltip" slot-scope="{ value }" ref="value" >
                                                <span v-if="value === 'emojiUnappy'" class="emoji">
                                                    <icon-base width="50" height="50" icon-name="emojiUnHappy"><icon-emojiUnhappy /></icon-base>
                                                </span>
                                                <span v-else-if="value === 'emojiFairlyunhappy'" class="emoji">
                                                    <icon-base width="50" height="50" icon-name="emojiFairlyunhappy"><icon-emojiFairlyunhappy /></icon-base>
                                                </span>
                                                <span v-else-if="value === 'emojiNeutral'" class="emoji">
                                                    <icon-base width="50" height="50" icon-name="emojiNeutral"><icon-emojiNeutral /></icon-base>
                                                </span>
                                                <span v-else-if="value === 'emojiFairlyhappy'" class="emoji">
                                                     <icon-base width="50" height="50" icon-name="emojiFairlyhappy"><icon-emojiFairlyhappy /></icon-base>
                                                </span>
                                                <span v-else-if="value === 'emojiHappy'" class="emoji">
                                                    <icon-base width="50" height="50" icon-name="emojiHappy"><icon-emojiHappy /></icon-base>
                                                </span>
                                            </div>

                                        </vue-slider>
                                    </b-col>
                                    <b-col>
                                        <span style="color:#BCBBC1;">
                                            <icon-base icon-name="emojiUnappy"><icon-emojiHappy /></icon-base>
                                            <br>
                                        </span>
                                    </b-col>
                                </b-row>
                            </b-container>
                             <br />
                             <br />
                            <b-button pill variant="primary" size="lg" id='submit'>
                                SUBMIT
                            </b-button>
                         </div>
                    </b-card>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<!-- Fichier Javascript pour initialisation slider et emojis-->
<script src="./app.js"></script>

